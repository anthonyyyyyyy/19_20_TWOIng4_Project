import React, {Component} from 'react';
import './App.css';

class Form extends Component
{
    render()
    {
        return(
            <div className="form">
                <h3>Remplir formulaire</h3>

                <div className = "Nom">
                    <label>UserId :</label>
                    <input type="text"></input>
                </div>

                <div className = "Prénom">
                    <label>Country :</label>
                    <input type="text"></input>
                </div>

                <div className = "Pays">
                    <label>Persons in house :</label>
                    <input type="text"></input>
                </div>

                <div className = "Ville">
                    <label>House size :</label>
                    <input type="text"></input>
                </div>

                <div className = "button">
                    <button>Envoyer</button>
                </div>

            </div>

        );
    }
}
export default Form;