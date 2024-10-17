async function AboutPage(){

    console.log("rendering about page");

    //delay of 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));

    //throw new Error("Some error happened");

    return (
        <div>
            <h4>About</h4>
            <p>This is a Next.js 14 Application</p>
        </div>
    )
}

export default AboutPage;