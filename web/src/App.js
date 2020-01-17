import React, { useState ,useEffect} from 'react';
import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";



function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
        
      },(err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  },[]);



  return (
    <div id="app">
      <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Github User</label>
              <input name="github_username" id="github_username" required/>
            </div>
            
            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required/>
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input type="number" name="latitude" id="latitude" required value="{latitude}"/>
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input type="number" name="longitude" id="longitude" required value="{longitude}"/>
              </div>
            </div>

            <button type="submit">Salvar</button>
           
          </form>
      </aside>
      <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="" alt=""/>
                <div className="user-info">
                  <strong>Rodrigo Antunes</strong>
                  <span>PHP, React, Angular2+</span>
                </div>
              </header>
              <p>Minha biografia</p>
              <a href="http://github.com">Acessar perfil no github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="" alt=""/>
                <div className="user-info">
                  <strong>Rodrigo Antunes</strong>
                  <span>PHP, React, Angular2+</span>
                </div>
              </header>
              <p>Minha biografia</p>
              <a href="http://github.com">Acessar perfil no github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="" alt=""/>
                <div className="user-info">
                  <strong>Rodrigo Antunes</strong>
                  <span>PHP, React, Angular2+</span>
                </div>
              </header>
              <p>Minha biografia</p>
              <a href="http://github.com">Acessar perfil no github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="" alt=""/>
                <div className="user-info">
                  <strong>Rodrigo Antunes</strong>
                  <span>PHP, React, Angular2+</span>
                </div>
              </header>
              <p>Minha biografia</p>
              <a href="http://github.com">Acessar perfil no github</a>
            </li>
          </ul>
      </main>
    </div>
  );
}

export default App;
