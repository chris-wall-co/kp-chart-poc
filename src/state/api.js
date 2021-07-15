
const KEYS = Object.freeze({
    COMPLIANCE_BY_UPDATE: 'cbu',
    PATCH_STATUS: 'ps',
});

const MOCK_DATA = {
    data: {

    },
    [KEYS.COMPLIANCE_BY_UPDATE]: {
        "VSCODE-210618": {
            applicable: 2,
            excluded: 0,
            installed: 0,
            not_installed: 2,
        },
        "VMWT11-210618": {
            applicable: 246,
            excluded: 0,
            installed: 8,
            not_installed: 1157,
        }
    },
    [KEYS.PATCH_STATUS]: {
        download_required: 46,
        downloading: 11,
        effectively_installed: 2634,
        excluded: 9497,
        failed: 2079,
        rescheduled: 958,
        in_progress: 4,
        installed: 175332,
        by_user: 330,
        with_errors: 1,
        invalid_pkg: 2,
        missing_sw_agent: 59,
        no_data: 10507,
        pending: 434,
        restart_pending: 60988,
        retry_download: 64,
        scheduled: 7061
    }
};

/**
 * @typedef {object} APIProxy
 * @property {function} getPatchStatus - gets the data from the API
 * @property {function} getComplianceByUpdate -
 */

/** @type {APIProxy} */
export const API = Object.freeze({
    getComplianceByUpdate: () => {
        return Promise.resolve(MOCK_DATA[KEYS.COMPLIANCE_BY_UPDATE]);
    },
    getPatchStatus: () => {
        return Promise.resolve(MOCK_DATA[KEYS.PATCH_STATUS]);
    },
});