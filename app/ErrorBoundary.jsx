'use client'
import React from "react";

export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError:false,
            error:null,
            errorInfo: null
        };
    }
    componentDidCatch(error, errorInfo){
        this.setState({
            hasError:true,
            error,
            errorInfo
        })
    }

    render(){
        if(this.state.hasError){
            return<p>Упс, ошибка!</p>
        }
        return this.props.children;
    }
}