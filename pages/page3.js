import { withRouter } from 'next/router';
import Link from 'next/link';

const page3 = ({ router }) => <div>
    <div>{router.query.name} 你好!很高兴见到你!</div>
    <Link href="/">go home!</Link>
</div>;
export default withRouter(page3);