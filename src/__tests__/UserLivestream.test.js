import { render, screen } from "@testing-library/react";
import { UserLivestream } from "../components/Streams/UserLivestream";

test("video player renders", () => {
    render(<UserLivestream />);
    const videoPlayer = screen.getByTestId('video-player');
    expect(videoPlayer).toBeInTheDocument();
});

test("chat box renders", () => {
    render(<UserLivestream />);
    const chatBox = screen.getByTestId('chat-box');
    expect(chatBox).toBeInTheDocument();
});
