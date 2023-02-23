import React from "react"
export function Home() {
    return (
        <div>
        <h1>[Company Website]</h1>
        </div>
    );
}

export function About() {
    return (
        <div>
        <h1>[About]</h1>
        </div>
    );
}

export function Events() {
    return (
        <div>
        <h1>[Events]</h1>
        </div>
    );
}

export function Products() {
    return (
        <div>
        <h1>[Products]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
        <h1>[Contact]</h1>
        </div>
    );
}

export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>
                Resource not found at {location.pathname}
            </h1>
        </div>
    );
}

export function Services() {
    <section>
        <h2>Our Services</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio. Praesent
        libero. Sed cursus ante dapibus diam. Sed
        nisi. Nulla quis sem at nibh elementum
        imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper
        porta. Mauris massa. Vestibulum lacinia arcu
        eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sodales ligula
        in libero.
        </p>
    </section>;
  }