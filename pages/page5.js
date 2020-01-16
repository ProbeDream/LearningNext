import { withRouter } from "next/router";
import Link from "next/link";

const page5 = ({router})=><div>
    <span>你好啊!{router.query.name}</span>
    <Link href="/"><a>Back home!</a></Link>
</div>
export default withRouter(page5);