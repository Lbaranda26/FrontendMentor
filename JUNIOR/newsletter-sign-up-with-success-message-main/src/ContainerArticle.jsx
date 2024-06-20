
import PositionStyle from './position.module.css';
import React, { useState } from "react";

function ContainerArticle(){

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    const [state, setState] = React.useState({ emailInput: "", email__input_text: false }); 

    const handleClick = e => {
        /*
        e.preventDefault();
        if (state.emailInput.match(validRegex)){
            console.log(state.email__input_text = true);
            console.log("valid");
        }else{
            console.log(state.email__input_text);
            console.log("Invalid");
        }*/
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.emailInput.match(validRegex)){
            console.log(state.email__input_text = true);
            console.log("valid");
        }else{
            console.log(state.email__input_text);
            console.log("Invalid");
        }
    }

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
            [e.target.className]: e.target.value
         });
      };

    return (
        //Sign-up form start
        <form onSubmit={handleSubmit}>
            <header className={PositionStyle.article__header}>
                <h1 className={PositionStyle.article__title}>Stay updated!</h1>
                <p className={PositionStyle.article__subtitle}>Join 60,000+ product managers receiving monthly updates on:</p>
            </header>
            <main className={PositionStyle.article__main}>
                <ul className={PositionStyle.article__ul}>
                    <li className={PositionStyle.article__li}>Product discovery and building what matters</li>
                    <li className={PositionStyle.article__li}>Measuring to ensure updates are a success</li>
                    <li  className={PositionStyle.article__li}>And much more!</li>
                </ul>
            </main>
            <footer className={PositionStyle.article__footer}>
                <section className={PositionStyle.email__container}>
                    <div className={PositionStyle.label__container}>
                        <label className={PositionStyle.email__label}>Email address</label>
                        <span>Valid email required</span>
                    </div>
                     <input name="emailInput" className={`${PositionStyle.email__input} email__input_text ${console.log(state.email__input_text ? "hello" : "oh no")}`} onChange={handleChange} type="text" placeholder="email@company.com"/>
                </section>
    
                <button className={PositionStyle.article__button} type="submit" onClick={handleClick}>Subscribe to monthly newsletter</button>
            </footer>
        </form>
        //Sign-up form end
    );
}

export default ContainerArticle;