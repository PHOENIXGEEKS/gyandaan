import Image from 'next/image'

function About() {
    return (
        <div id="about" className="flex flex-column h-96 p-12">
            <div id="card" className="flex w-3/5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit at doloremque, quis voluptatibus facilis tempore ducimus vitae excepturi consectetur animi maxime eaque ex soluta. Consectetur reprehenderit asperiores repellendus magni dolore.
            </div>
            <Image
                // loader={myLoader}
                src="/vectors/about.jpg"
                alt="About"
                layout="fixed"
                width={600}
                height={400}
            />
        </div>
    )
}

export default About
