import { useParams } from "react-router-dom";

const UserLivestream = () => {
    let params = useParams();

    return (
        <>
        <p>{params.channelName}</p>
        </>
    )
}

export { UserLivestream };
