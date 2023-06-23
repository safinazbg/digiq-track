import {
    LIST_ASSETS,
    _PUT_STATUS
} from "@/store/operations";
import {getAssetActionUrl, getAssetsUrl} from "@/store/lib/apiUrls";
import {throttleBufferedAction} from "@/store/lib/throttledBufferedAction";
import axios from "@/plugins/axios";

export default {
    [LIST_ASSETS](context,
                  {
                      dataType,
                      repoId,
                      permissionHostDataType,
                      permissionHostRepoId,
                      offset,
                      limit,
                      sorting,
                      filter
                  }) {
        const options = {
            dataType,
            permissionHostDataType,
            permissionHostRepoId,
            offset,
            limit,
            sorting,
            filter: JSON.stringify(filter)
        }
        let url = getAssetsUrl({dataType})
        if (repoId) {
            options.repoId = repoId
            url = getAssetActionUrl({dataType, postfix: repoId, actionName: 'find'})
        }
        return throttleBufferedAction({
            action: axios.post,
            url,
            params: options,
        })
                .then(async response => {
                    context.commit(
                            LIST_ASSETS,
                            response.data
                    )
                    context.commit(_PUT_STATUS, {event: LIST_ASSETS, result: response.data})
                    return response
                })
    },
}