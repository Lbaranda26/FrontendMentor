function ContainerImage(){
    return(
        <>
             <source media="(max-width: 799px)" srcSet="assets/images/illustration-sign-up-mobile.svg" />
             <source media="(min-width: 800px)" srcSet="assets/images/illustration-sign-up-desktop.svg" />
             <img src="assets/images/illustration-sign-up-desktop.svg" alt="hero image"/>
        </>
    );
}

export default ContainerImage;
