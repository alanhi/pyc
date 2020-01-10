import { Upload, Icon, message } from 'antd';
import React, { Component } from 'react'

const { Dragger } = Upload;

class Uploader extends Component {
    config = {
        name: 'file',
        showUploadList: false,
        action: '/file_upload',
        onChange: (info) => {
            const { status, response } = info.file;
            if (status !== 'uploading') {
                console.log('upload:', info.file.name);
            }
            if (status === 'done') {
                this.props.change(response);
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                this.props.change(response);
            }
        }
    }

    render() {
        return (
            <Dragger {...this.config}>
                <p className="ant-upload-drag-icon"><Icon type="inbox" /></p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Strictly prohibit from uploading company data or other band files</p>
            </Dragger>
        )
    }
}

export default Uploader;