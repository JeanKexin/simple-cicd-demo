# simple-cicd-demo

This is an interest compound calculator app with the aim of demonstrating a CI/CD flow.

To run the app:
> node ./myapp/server.js

I started exploring github actions by creating a `.github/workflows` and a `.yml` file.
Upon testing the trigger conditions of the CI/CD flow, result of the job carried out by github actions had a delay of 5~10 minutes.

Hence I tried using CircleCI integration to go through the setup process with a .circleci folder and a `.config` file.
The integration process turned out seamless, it also conducted the test suite by running the `npm test` command which I have included.

![cicd ](https://user-images.githubusercontent.com/53599718/136230625-ca20c4bb-f053-4ea1-bad7-7752781ca616.png)


![cicd2](https://user-images.githubusercontent.com/53599718/136232978-ca6503ba-c820-4be8-958a-0472d0033476.png)


