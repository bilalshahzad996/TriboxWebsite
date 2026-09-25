export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <span className="label">(404)</span>
        <h1 className="section-title">Page not found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <a href="/" className="btn btn-primary">Back to home</a>
      </div>
    </section>
  )
}
