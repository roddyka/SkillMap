import React from 'react';
import './style.css';

function DevItem({dev}){
    return (
        <li  className="dev-item">
        <header>
          <img src={dev.avatar_url} alt={dev.name}/>
          <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
          </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no github</a>
        <div className="grid-group">
          <div className="grid-block">
             <span >Followers: {dev.followers}</span>
          </div>
          <div className="grid-block">
            <span >Repositories: {dev.public_repos}</span>
          </div>
        </div>
      </li>
    )
}

export default DevItem;