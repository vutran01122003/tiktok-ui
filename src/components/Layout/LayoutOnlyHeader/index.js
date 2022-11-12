import Header from '~/components/Layout/components/Header';

function LayoutOnlyHeader({ children }) {
    return (
        <div className="app">
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default LayoutOnlyHeader;
