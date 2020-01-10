import { Upload, Icon, message } from 'antd';
import React, { Component } from 'react'

const { Dragger } = Upload;

class Uploader extends Component {
    config = {
        name: 'file',
        accept: ".pyc,.pyo",
        showUploadList: false,
        action: 'http://127.0.0.1:8080/file_upload',
        onChange: (info) => {
            const { status, response } = info.file;
            if (status !== 'uploading') {
                console.log('upload:', info.file.name);
            }
            if (status === 'done') {
                if (typeof (response) == 'string' && response.length > 20) {
                    this.props.change(response);
                    message.success(`${info.file.name} file uploaded successfully.`);
                }
                else {
                    message.error(`Unable to parse file ${info.file.name}.`);
                }
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
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