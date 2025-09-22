import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utilis";

interface Props {
  handleClick?: () => void;
}

const NavItems = ({ handleClick }: Props) => {
  const user = useLoaderData() as { name: string; email: string; imageUrl?: string };
  const navigate = useNavigate();

  const handleLogout = async () => {
    // await logoutUser(); // Uncomment if logoutUser is available
    navigate("/sign-in");
  };

  return (
    <section className="nav-items">
      {/* Logo */}
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>Worldly</h1>
      </Link>

      {/* Sidebar Navigation */}
      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group navitem", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                  onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-5 group-hover:invert ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <footer className="nav-footer">
          <img
            src={user?.imageUrl || "/assets/images/david.webp"}
            alt={user?.name || "David"}
            referrerPolicy="no-referrer"
          />
          <article>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </article>
          <button onClick={handleLogout} className="cursor-pointer">
            <img src="/assets/icons/logout.svg" alt="logout" className="size-6" />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
