import React, {Component} from 'react'
import Wrapper from '../wrapper';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentDidMount () {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                })
            });
        }

        closeModalHandler = () => {
            this.setState({
                error: null
            });
        }

        render() {
            return (
                <Wrapper>
                    <Modal visible={this.state.error} closeModal={this.closeModalHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Wrapper>
            );
        }
    }
}

export default withErrorHandler;