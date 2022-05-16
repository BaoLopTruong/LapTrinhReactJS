import {useRouter} from 'next/router';
export default function Post(){

    const router = useRouter();
    const {pid, state } = router.query;

    return(
        <div>
        <p>Post id: {pid}</p>
        <p>State: {state}</p>
        </div>
    )
 }