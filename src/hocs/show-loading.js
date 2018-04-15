import React from 'react';

const showLoading = (WrappedComponnet) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            const { loading } = this.props;

            if (loading) {
                return <div>
                    <h1 className="not-found-message">Fetching resource...</h1>
                </div>;
            }
            return <WrappedComponnet {...this.props} />
        }
    }
};

export default showLoading;