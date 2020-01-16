import Axios from "axios";
import { withRouter } from "next/router";
import Link from "next/link";

const requestURL = "https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList";

const page6 = ({router,list})=><div>
    <h4>Hello {router.query.name}!</h4>
    get data success is {list}!
</div>


page6.getInitialProps = async ()=>{
    const promise = await new Promise(resolve=>{
        Axios(requestURL).then(response=>{
            resolve(response.data.data);
        })
    });
    return promise;
}

export default withRouter(page6);
