import React from "react";
import { render } from "react-dom";
import { CardsContextMenu } from "./CardsContextMenu.js";
import {
	Dropdown,
	Icon,
	Card,
	Image,
	Modal,
	Button,
	Container
} from "semantic-ui-react";

export class CardExpandable extends React.Component {
	constructor(props) {
		super(props);
		this.handleExpand = this.handleExpand.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.handleDragStart = this.handleDragStart.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			expanded: false,
			descriptionCursor: "zoom-in",
			descriptionWhiteSpace: "nowrap",
			descriptionOverflow: "hidden",
			descriptionTextOverflow: "ellipsis",
			isHovered: "none"
		};
	}
	handleClick(e) {
		e.preventDefault();
		console.log(this.props.formattedItem.open_url);
		window.open(this.props.formattedItem.open_url, "_blank");
	}

	handleExpand(e) {
		e.preventDefault();
		if (this.state.expanded == false) {
			this.setState({
				expanded: true,
				descriptionCursor: "zoom-out",
				descriptionWhiteSpace: "",
				descriptionOverflow: "",
				descriptionTextOverflow: ""
			});
		} else {
			this.setState({
				expanded: false,
				descriptionCursor: "zoom-in",
				descriptionWhiteSpace: "nowrap",
				descriptionOverflow: "hidden",
				descriptionTextOverflow: "ellipsis"
			});
		}
	}
	handleDragStart(e) {
		e.dataTransfer.setData("text/plain", this.props.dragAndDropString);
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
	
		let thumbnail = null;
		let mediaNode = null;
		let iconNode = null;
		if (this.props.iconName != "") {
			iconNode = (
				<Icon name={this.props.iconName} color={this.props.iconColor} />
			);
		}
		if (this.props.mediaType == "image") {
			thumbnail = (
				<Image
					style={{
						cursor: "zoom-in"
					}}
					floated="left"
					src={this.props.thumbnail}
					size="tiny"
				/>
			);
			mediaNode = <Image centered src={this.props.highres} />;
		}

		if (this.props.mediaType == "video") {
			if (this.props.thumbnail == null) {
				thumbnail = <Icon link size="big" name="play circle" />;
			} else {
				thumbnail = (
					<Image floated="left" size="tiny" onClick={e => e.preventDefault()}>
						<Image src={this.props.thumbnail} />
						<Icon
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)"
							}}
							inverted
							size="big"
							color=""
							name="play circle"
						/>
					</Image>
				);
			}

			mediaNode = (
				<video width="100%" autoPlay controls>
					<source src={this.props.highres} type="video/mp4" />
					Your browser does not support HTML5 video.
				</video>
			);
		}
		if (this.props.mediaType == "audio") {
			//thumbnail = <Button floated="left" content="Play" icon="play" />;
			thumbnail = <Icon link size="big" name="volume up" />;
			mediaNode = (
				<audio style={{ width: "100%" }} autoPlay controls>
					<source src={this.props.highres} type="audio/mp3" />
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
				onDragStart={this.handleDragStart}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				style={{ margin: "0px" }}
				{...this.props}>
				<Card.Content>
					<Modal closeIcon="close" trigger={thumbnail} size="small">
						<Modal.Header>{this.props.title}</Modal.Header>
						<Modal.Content>{mediaNode}</Modal.Content>
					</Modal>
					<CardsContextMenu
						formattedItem={this.props.formattedItem}
						rawItem={this.props.rawItem}
					/>
					{iconNode}
					<strong onClick={this.handleClick}>{this.props.title}</strong>
					<Card.Meta dangerouslySetInnerHTML={{ __html: this.props.meta }} />
					<Card.Description
						onClick={this.handleExpand}
						style={{
							cursor: this.state.descriptionCursor,
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
