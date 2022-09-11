# useAutoResize

## Getting Started
Install the Package 
```
npm i useAutoResize
```
```
const resize = resizeComponents(document.getElementById("videoGrid")!);
const [participants, setParticipants] = useState<Number[]>([]);

useEffect(() => {
    resize();
  }, [participants, setParticipants, resize]);
```
useAutoResizer is the custom React Hook that will take a Parent Component and will automatically resize the children elements to fit in the parent component the hook will calculate the width and height of each children and will assign it to them. In the Result the inner elements will not get outside from the parent components and will be in perfact 16:9 aspect ratio.The hook will also prevant the overflow no matter how much children elments are there resulting in redusing the size of each tiles.

Participants can be anything 

Example 

```
<div className="App">
      <h1 className="head">React Auto Resizing Video Grid By Muhammad Umair</h1>
      <div
        id="videoGrid"
        style={{
          display: "flex",
          height: "82vh",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center",
          background: "grey",
        }}
      >
        {participants.map((number, index) => (
          <div
            id="videoElement"
            className="videoElement"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={{
              background: "black",
              borderRadius: "10px",
            }}
          >
            <video
              style={{
                width: "100%",
                height: "100%",
              }}
              controls
              autoPlay
              src={videoSrc}
            />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button
          className="addButton"
          onClick={(e) => {
            // e.preventDefault();
            setParticipants([...participants, 1]);
          }}
        >
          Add Participant
        </button>
        <button
          className="removeButton"
          onClick={(e) => {
            e.preventDefault();
            const data = participants.splice(1);
            setParticipants(data);
          }}
        >
          Remove Participant
        </button>
      </div>
    </div>
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

Built By 
Name:Muhammad Umair
Email:amianumair@gmail.com
LinkedIn:muhammadumairakram
Medium:@amianumair
