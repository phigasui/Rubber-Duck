import { h, app } from "hyperapp"

const PARAMS = {count: 1, screen_name: 'maina_5656'}
const DEFAULT_IMAGE_SRC = "images/ishino_last.png"

const IMG_WIDTH = 100
const TWEET_INTERVAL = 1

const INITIAL_MESSAGE = "おはようございます！"

const MESSAGES = [
  "おつかれさまです！",
  "がんばってください！"
]

const state = {
  position: {
    x: 0,
    y: 0
  },
  message: INITIAL_MESSAGE,
  imageSrc: DEFAULT_IMAGE_SRC
}

const getRandomMessage = () => (
  MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
)

const actions = {
  setPosition: (position) => ({position: position}),
  setMessage: (message) => ({message: message}),
  start: () => (state, actions) => {
    console.log("start")
    actions.getTweet()
    setInterval(actions.getTweet, 1000 * TWEET_INTERVAL)
  },
  getTweet: () => (state, actions) => {
    electronApp.getTimeline('user', PARAMS, actions.setMessage)
  }
}

const Message = ({message}) => (
  <div
  style={{
    "font-family": "Gulim, sans-serif",
    position: "relative",
    display: "table-cell",
    width: 90,
    height: 90,
    background: "#70a6ff",
    "border-radius": "3%",
    color: "#EEE",
    "vertical-align": "middle",
    "text-align": "center",
    opacity: 0.8
  }}>
  <p>
  {message}
  </p>
  <div
  style={{
    position: "absolute",
    bottom: -18,
    left: "50%",
    border: "10px solid transparent",
    "border-top": "15px solid #70a6ff",
    "margin-left": -10
  }}>
  </div>
  </div>
)

const Duck = () => (state, actions) => (
  <div
    oncreate={actions.start}
    style={{
      position: "absolute",
      right: state.position.x,
      bottom: state.position.y
    }}
    >
    {() => {
      if (state.message) {
        return <Message message={state.message} />
      }
      return null
    }}
    <a href="javascript:void(0)">
      <img src={state.imageSrc} width={IMG_WIDTH} />
    </a>
  </div>
)

const view = (state, actions) => (
  <main>
    <Duck />
  </main>
)

const main = app(state, actions, view, document.body)
