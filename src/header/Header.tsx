import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React &amp; Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://images.unsplash.com/photo-1624207371246-ed2f11b70e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
    </div>
  );
}

export default Header;
