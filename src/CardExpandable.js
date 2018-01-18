import React from "react";
import { render } from "react-dom";
import { CardsContextMenu } from "./CardsContextMenu.js";
import { Dropdown, Icon, Card, Image, Modal, Button } from "semantic-ui-react";

export class CardExpandable extends React.Component {
	constructor(props) {
		super(props);
		this.handleExpand = this.handleExpand.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.state = {
			expanded: false,
			expandIcon: "chevron down",
			descriptionWhiteSpace: "nowrap",
			descriptionOverflow: "hidden",
			descriptionTextOverflow: "ellipsis",
			isHovered: "none"
		};
	}

	handleExpand(e) {
		e.preventDefault();
		if (this.state.expanded == false) {
			this.setState({
				expanded: true,
				expandIcon: "chevron up",
				descriptionWhiteSpace: "",
				descriptionOverflow: "",
				descriptionTextOverflow: ""
			});
		} else {
			this.setState({
				expanded: false,
				expandIcon: "chevron down",
				descriptionWhiteSpace: "nowrap",
				descriptionOverflow: "hidden",
				descriptionTextOverflow: "ellipsis"
			});
		}
	}

	handleMouseEnter(e) {
		this.setState({
			isHovered: ""
		});
	}
	handleMouseLeave(e) {
		this.setState({
			isHovered: "none"
		});
	}

	render() {
		let itemImage = null;
		let mediaTag = null;

		if (this.props.mediaType == "image") {
			itemImage = (
				<Image
					style={{
						cursor: "zoom-in"
					}}
					floated="left"
					src={this.props.image}
					size="tiny"
				/>
			);
			mediaTag = <Image src={this.props.image} />;
		}

		if (this.props.mediaType == "video") {
			if (this.props.image == null) {
				itemImage = <Button floated="left" content="Play" icon="play" />;
			} else {
				itemImage = (
					<Image
						src={this.props.image}
						size="tiny"
						floated="left"
						style={{
							textAlign: "center",
							cursor: "zoom-in"
						}}
					/>
				);
			}

			mediaTag = (
				<video width="100%" autoPlay controls>
					<source src={this.props.video} type="video/mp4" />
					Your browser does not support HTML5 video.
				</video>
			);
		}
		if (this.props.mediaType == "audio") {
			itemImage = <Button floated="left" content="Play" icon="play" />;
			mediaTag = (
				<audio width="100%" autoPlay controls>
					<source src={this.props.audio} type="audio/mp3" />
					Your browser does not support HTML5 audio.
				</audio>
			);
		}

		return (
			<Card
				link
				color=""
				centered
				draggable="true"
				ondragstart="drag(event)"
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				style={{ margin: "4px" }}
				{...this.props}>
				<Card.Content>
					<Modal closeIcon="close" trigger={itemImage} size="small">
						<Modal.Header>{this.props.title}</Modal.Header>
						<Modal.Content scrolling>
							{mediaTag} {this.props.description}
						</Modal.Content>
					</Modal>
					<CardsContextMenu />
					<Icon name={this.props.iconName} color={this.props.iconColor} />
					<strong>{this.props.title}</strong>
					<Card.Meta>{this.props.meta}</Card.Meta>
					<Card.Description
						onClick={this.handleExpand}
						style={{
              cursor: "zoom-in",
							whiteSpace: this.state.descriptionWhiteSpace,
							overflow: this.state.descriptionOverflow,
							textOverflow: this.state.descriptionTextOverflow,
							textAlign: "justify"
						}}>
						{this.props.description}
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}
