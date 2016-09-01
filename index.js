import {render} from "react-dom";
import React from "react";
import Block from "./components/Block";
import $ from "jquery";
require('./css/less.less');

const containerEL = document.getElementById("container");

render(
	<Block />,
	containerEL
)