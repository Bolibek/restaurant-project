export default function Footer(){
  return(
    <footer className="page-footer footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">SPA</a>
        </div>
      </div>
    </footer>
  )
}