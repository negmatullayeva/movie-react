export default function Footer() {
  return (
    <footer className="page-footer deep-purple darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="indigo-text text-lighten-4 right" href="#!">
            Movie
          </a>
        </div>
      </div>
    </footer>
  );
}
