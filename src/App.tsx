import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Stats from './containers/Stats/Stats';
import Repos from './containers/Repos/Repos';
import SideBar from './containers/SideBar/SideBar';
import Search from './containers/Search/Search';
import USER from './graphql/user.query';
import { IRepo, IStats, IHighlights, IInfos, IOrg } from './types';
import {
  formatRepos,
  formatStats,
  fromatHighlights,
  formatInfos,
  formatOrgs,
} from './utils/formaters';

function App() {
  const [login, setLogin] = useState<string>('AM-77');
  const [lookup, setLookup] = useState<string>('');
  const { loading, error, data } = useQuery(USER, { variables: { login } });

  const searchUser = () => {
    setLogin(lookup);
  };

  const render = (isLoading: boolean) => {
    if (isLoading) {
      return (
        <div className="container">
          <SideBar isLoading />
          <div className="main">
            <Search searchUser={searchUser} setLookup={setLookup} />
            <Stats isLoading />
            <Repos isLoading />
          </div>
        </div>
      );
    }

    const { user } = data;
    const infos: IInfos = formatInfos(user);
    const highlights: IHighlights = fromatHighlights(user);
    const orgs: IOrg[] = formatOrgs(user);
    const stats: IStats = formatStats(user);
    const repos: IRepo[] = formatRepos(user.repositories);
    return (
      <div className="container">
        <SideBar
          avatarUrl={user.avatarUrl}
          infos={infos}
          highlights={highlights}
          orgs={orgs}
          isLoading={false}
        />
        <div className="main">
          <Search searchUser={searchUser} setLookup={setLookup} />
          <Stats stats={stats} isLoading={false} />
          <Repos repos={repos} isLoading={false} />
        </div>
      </div>
    );
  };

  if (loading) return render(true);
  if (error) {
    return (
      <div className="error">
        <p>The profile you are looking does not exist or have been removed.</p>
        <div className="search-again">
          <h2>Search again</h2>
          <Search searchUser={searchUser} setLookup={setLookup} />
        </div>
      </div>
    );
  }

  return render(false);
}

export default App;
