type TestType = {
    name: string;
}

function getStarted(arg: TestType) {
    console.log(arg.name);
}

getStarted({ name: 'Steven' });
