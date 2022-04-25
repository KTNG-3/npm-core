interface IUpdatePart {
    name: string,
    version: {
        current: string,
        latest: string,
    }
}

interface IUpdate {
    response: string,
    data: {
        update: Array<IUpdatePart>,
        latest: Array<IUpdatePart>,
    },
};

export type { IUpdate, IUpdatePart };