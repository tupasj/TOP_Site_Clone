import { render, screen, within } from "@testing-library/react";
import { RecommendedChannels } from "../components/Sidebar/RecommendedChannels";

const getFirstRecommendedChannel = () => {
    const recommendedChannels = screen.getAllByTestId('recommended-channel');
    const recommendedChannel = recommendedChannels[0];
    return recommendedChannel;
};

jest.mock('../components/Sidebar/RecommendedChannels.js');

afterEach(() => {
    jest.restoreAllMocks();
});

test('renders the correct amount of child divs', () => {
    render(<RecommendedChannels />);
    const recommendedChannels = screen.getAllByTestId('recommended-channel');
    expect(recommendedChannels.length).toBe(10);
});

describe('renders all the expected content', () => {
    test('renders profile image', () => {
        render(<RecommendedChannels />);
        const recommendedChannel = getFirstRecommendedChannel();
        const img = within(recommendedChannel).getByAltText('user picture');
        expect(img).toBeInTheDocument();
    });

    test('renders username and current activity', () => {
        render(<RecommendedChannels />);
        const recommendedChannel = getFirstRecommendedChannel();
        const usernameSpan = within(recommendedChannel).getByTestId('recommended-channel__name');
        const currentActivitySpan = within(recommendedChannel).getByTestId('recommended-channel__game-name--center');
        expect(usernameSpan).toBeInTheDocument();
        expect(currentActivitySpan).toBeInTheDocument();
    });

    test('renders live icon and viewer count', () => {
        render(<RecommendedChannels />);
        const recommendedChannel = getFirstRecommendedChannel();
        const liveIcon = within(recommendedChannel).getByTestId('recommended-channel__icon--circle fa-solid fa-circle');
        const viewerCountSpan = within(recommendedChannel).getByTestId('recommended-channel__viewer-count');
        expect(liveIcon).toBeInTheDocument();
        expect(viewerCountSpan).toBeInTheDocument();
    });
});
