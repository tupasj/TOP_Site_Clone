import twitchAPI from "../../api/twitchAPI";
import { useEffect } from "react";

const Sidebar = () => {
  useEffect(() => {
    // const consoleLogUsers = async () => {
    //   const users = await twitchAPI.fetchUsers('asmongold');
    //   console.log(users);
    // };
    const consoleLogStreams = async () => {
      const streams = await twitchAPI.fetchStreams();
      console.log(streams);
    }
    // consoleLogUsers();
    consoleLogStreams();
  }, []);

  return (
    <aside>
      <div data-testid="sidebar-title" className="sidebar-title">Recommended Channels</div>
      <div className="recommended-channels">
        <div className="recommended-channel">Recommended channel</div>
      </div>
    </aside>
  );
};

export { Sidebar };
