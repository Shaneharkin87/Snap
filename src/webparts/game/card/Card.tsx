import * as React from 'react';
import { ICardProps } from './ICardProps';
import '../../../branding.css';


export default class Card extends React.Component<ICardProps, {}> {
    public render(): React.ReactElement<ICardProps> {
        return (
                <div className = "cardContainer">

                    <span className= "topLeftRed"> {this.props.cardNo} </span>
                    <div> <img src={this.props.image} className= "image"></img> </div>

                </div>
        );
    }
  }