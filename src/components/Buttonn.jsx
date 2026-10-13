import { Link } from "react-router";

function Buttonn ({ children, className, to}) {
   return (
<>
    <Link to={to} className={` border cursor-pointer  ${className} `}>{children}</Link>
</>
   )
}

export default Buttonn;