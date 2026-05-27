import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rimo Cabales. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          <Link to="/privacy-policy" className="hover:text-primary/90">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
