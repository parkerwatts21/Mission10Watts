function Header(props: any) {
  return (
    <header>
      <div className="row subtitle navbar navbar-dark bg-dark">
        <h1 className="text-white text-sm">{props.title}</h1>
      </div>
      <br />
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <p>
            Our website offers detailed profiles of bowlers in our database,
            including their stats and achievements. Whether you're a bowling fan
            or a coach, you'll find valuable information about bowlers here.
          </p>
        </div>
        <div className="col-3"></div>
      </div>
    </header>
  );
}

export default Header;
