import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="products">Products</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
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
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}

export function Services() {
  <section>
    <h2>Our Services</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
      nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
      tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
      nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Curabitur sodales ligula in libero.
    </p>
  </section>;
}

export const Location = () => (
  <section className="location">
    <h2>Our Location</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam.
    </p>
    <p>
      Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
      Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
      ligula in libero.
    </p>
    <p>
      Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
      quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
      tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus
      risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis
      ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
      tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos.
    </p>
  </section>
);

export const Company = () => (
  <section className="company">
    <h2>About the Company</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
      nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
      tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
      nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Curabitur sodales ligula in libero.
    </p>
    <p>
      Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
      quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
      tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus
      risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis
      ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
      tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos.
    </p>
  </section>
);

export const History = () => (
  <section className="history">
    <h2>Our History</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
      nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
      tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
      nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Curabitur sodales ligula in libero.
    </p>
    <p>
      Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
      quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
      tristique sem. Proin ut ligula vel nunc egestas porttitor.
    </p>
    <p>
      {" "}
      Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce
      ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
      ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat
      condimentum velit. Class aptent taciti sociosqu ad litora torquent per
      conubia nostra, per inceptos himenaeos.
    </p>
  </section>
);
