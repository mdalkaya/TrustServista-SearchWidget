import React from "react";
import TimeAgo from "react-timeago";
import { execute_fetch } from "./fetch.js";
import ScrollableAnchor from "react-scrollable-anchor";
import { CardExpandable } from "./CardExpandable.js";
import { render } from "react-dom";
import _ from "lodash";


import {
	Grid,
	Rail,
	Image,
	Accordion,
	Tab,
	Menu,
	Icon,
	Card,
	Button,
	Divider,
	Label,
	Header,
	Input,
	Container,
	Dropdown,
	Popup,
	Segment,
	Search,
	List,
	Form,
	Modal,
	Item,
	Dimmer,
	Message,
	Loader,
	TextArea,
	Checkbox,
	Sidebar,
	Breadcrumb,
	Feed,
	Comment,
	Responsive
} from "semantic-ui-react";

class WidgetWithCards extends React.Component {
	constructor(props) {
		super(props);
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.handleRefresh = this.handleRefresh.bind(this);
		this.handleApplyFilters = this.handleApplyFilters.bind(this);
		this.resetFilters = this.resetFilters.bind(this);
		this.handleKeepOpened = this.handleKeepOpened.bind(this);
		this.handleSearchSideBar = this.handleSearchSideBar.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);

		this.state = {
			page_to_fetch: 0,
			loadingresults: false,
			searchSideBarVisible: false,
			keepOpened: false,
			filtersHaveChanged: false,
			filterButtonColor: null,
			keepOpened: false,
			query: "",
			resultCount: "No search started",
			articles: {
				status: "ok",
				source: "abc-news-au",
				sortBy: "top",
				articles: ""
			},
			allCards: <div />,
			newCards: <div />
		};
	}

	componentDidMount() {
		this.handleRefresh();
	}
	handleRefresh(e) {
		this.setState({ page_to_fetch: ++this.state.page_to_fetch });

		// console.log(this.state.allCards);

		this.setState({
			loadingresults: true,
			resultCount: "Searching..."
		});

		this.setState(prevState => ({
			allCards: (
				<div>
					{" "}
					<Loader active />
				</div>
			)
		}));

		execute_fetch(this.state.query, this.state.page_to_fetch).then(
			function(data) {
				this.setState({
					resultCount: data.count + " result(s)"
				});

				var previousCard = this.state.allCards;

				var cardsHTML = (
					<Card.Group unstackable divided>
						{this.state.loadingresults ? (
							data.contentItems.map(item => (
								<CardExpandable
								fluid
									key={item._id}
									itemJSON={item}
									iconName="image"
									iconColor=""
									iconName={
										item.hasOwnProperty("images") ? (
											"image"
										) : item.hasOwnProperty("videos") ? (
											"film"
										) : (
													"volume up"
												)
									}
									mediaType={
										item.hasOwnProperty("images") ? (
											"image"
										) : item.hasOwnProperty("videos") ? (
											"video"
										) : (
											"audio"
										)
									}
									image={
										item.hasOwnProperty("images") ? (
											item.images[0].variants[0].url
										) : null
									}
									video={
										item.hasOwnProperty("videos") ? (
											item.videos[0].variants[0].url
										) : null
									}
									audio={
										item.hasOwnProperty("audios") ? (
											item.audios[0].variants[1].url
										) : null
									}
									description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
									title={item.mainTitle}
									//href={item.audios[0].variants[0].url}
									DRAG_AND_DROP_STRING={
										"<mos><mosID>DIRA.DEMO.AUDIO.MOS</mosID>" +
										"<objID>" +
										item._id +
										"</objID>" +
										"<objSlug>" +
										item.mainTitle +
										"</objSlug>" +
										"<objTB>48000</objTB> <objDur>497664</objDur>" +
										"<mosAbstract>" +
										item.mainType.displayName +
										"</mosAbstract></mos>"
									}
									target="_blank"
									meta={
										<span>
											{item.mainType.displayName}
											&nbsp; &middot; &nbsp;
											<TimeAgo date={item.creaTime} />
										</span>
									}
								/>
							))
						) : (
							<Loader active />
						)}
					</Card.Group>
				);

				this.setState(prevState => ({
					allCards: <div>{cardsHTML}</div>
				}));
			}.bind(this)
		);
	}
	handleKeepOpened(e) {
		this.setState({
			keepOpened: !this.state.keepOpened
		});
	}
	handleSearchSideBar(e) {
		this.setState({
			searchSideBarVisible: !this.state.searchSideBarVisible
		});
	}

	handleFilterChange(e) {
		this.setState({
			filtersHaveChanged: true
		});
	}

	handleApplyFilters(e) {
		if (this.state.filtersHaveChanged) {
			this.setState({
				filterButtonColor: "orange"
			});
		}

		if (!this.state.keepOpened) {
			this.setState({
				searchSideBarVisible: false
			});
		}
	}

	resetFilters(e) {
		this.setState({
			filtersHaveChanged: false,
			filterButtonColor: null
		});
	}
	handleKeyPress(e) {
		if (e.charCode == 13) {
			this.handleRefresh();
			console.log(this.state.query);
		}
	}

	render() {
		let panels = [
			{
				active: true,
				title: {
					key: "sort",
					children: (
						<Header as="h4" dividing>
							<Header.Content>
								<Icon name="list" />View
							</Header.Content>
						</Header>
					)
				},
				content: {
					key: "sortContent",
					children: (
						<div>
							Fields
							<List selection>
								{" "}
								<List.Item>
									<List.Icon name="" />
									<List.Content>Description</List.Content>
								</List.Item>
								<List.Item active>
									<List.Icon name="check" />
									<List.Content>Metadata</List.Content>
								</List.Item>
							</List>
							Layout
							<List selection>
								{" "}
								<List.Item>
									<List.Icon name="" />
									<List.Content>Grid</List.Content>
								</List.Item>
								<List.Item active>
									<List.Icon name="check" />
									<List.Content>List</List.Content>
								</List.Item>
							</List>
							Image
							<List selection>
								{" "}
								<List.Item>
									<List.Icon name="" />
									<List.Content>None</List.Content>
								</List.Item>
								<List.Item active>
									<List.Icon name="check" />
									<List.Content>Small</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="" />
									<List.Content>Large</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="" />
									<List.Content>Very large</List.Content>
								</List.Item>
							</List>
						</div>
					)
				}
			},
			{
				active: true,
				title: {
					key: "data",
					children: (
						<Header as="h4" dividing>
							<Header.Content>
								<Icon name="sort content descending" />Sort
							</Header.Content>
						</Header>
					)
				},
				content: {
					key: "dataContent",
					children: (
						<List selection>
							{" "}
							<List.Item active>
								<List.Icon name="arrow down" />
								<List.Content>Creation Date</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name="" />
								<List.Content>Update time</List.Content>
							</List.Item>
						</List>
					)
				}
			},
			{
				title: {
					key: "filters",
					children: (
						<Header as="h4" dividing>
							<Header.Content>
								<Icon name="filter" />Filters
							</Header.Content>
						</Header>
					)
				},
				content: {
					key: "filtersContent",
					children: (
						<Form>
							<Form.Field>
								<label>placeholder</label>
								<Input />
							</Form.Field>
						</Form>
					)
				}
			}
		];
		return (
			<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
				<div style={{ margin: "5px", flex: "0" }}>
					<Input
						onChange={(e, data) => {
							this.setState({ query: data.value });
						}}
						onKeyPress={this.handleKeyPress}
						action={
							<Button
							basic
								icon="options"
								onClick={this.handleSearchSideBar}
							/>
						}
						placeholder="Search"
						defaultValue=""
						fluid
					/>
				</div>

				<Divider horizontal fitted>
					<Label size="small" color="grey">
						{this.state.resultCount}
					</Label>
				</Divider>

				<Sidebar.Pushable style={{ height: "100%" }}>
					<Sidebar
						animation="overlay"
						direction="right"
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							overflowX: "hidden",
							maxHeight: "100%"
						}}
						visible={this.state.searchSideBarVisible}>
						<Segment
							attached
							className="fancy-scrollbar"
							style={{
								overflowX: "hidden",
								overflowY: "auto",
								height: "100%",
								flex: "1"
							}}>
							<Accordion panels={panels} defaultActiveIndex={0} />
						</Segment>

						<Segment attached style={{ flex: "0" }}>
							<Checkbox label="Keep opened" onClick={this.handleKeepOpened} />
							<p />
							<Button
								primary
								content="Apply"
								floated="left"
								onClick={this.handleApplyFilters}
							/>
							<Button.Group basic floated="right">
								<Button icon="eraser" onClick={this.resetFilters} />
								<Button icon="save" />
								<Button icon="bell" />
							</Button.Group>
						</Segment>
					</Sidebar>
					<Sidebar.Pusher
						className="fancy-scrollbar card-list"
						style={{
							overflowY: "auto",
							display: "flex",
							flex: "1",
							flexDirection: "column",
							height: "100%"
						}}>
						{this.state.allCards}

						{/*
						<Divider horizontal>
							<Button content="Load more" onClick={this.handleRefresh} />
						</Divider>
						*/}
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		);
	}
}
class App extends React.Component {
	render() {
		return (
			<div
				className="fullscreen"
				style={{
					display: "flex",
					flexDirection: "column",
					height: "100vh",
					justifyContent: "space-between"
				}}>
				<WidgetWithCards style={{ height: "100%" }} />
			</div>
		);
	}
}

// ----------------------------------------
// Render
// ----------------------------------------
export default App;
