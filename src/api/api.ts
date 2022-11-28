interface SignIn {
    email: string
    password: string
}

export const signIn = async ({ email, password }: SignIn) => {
    try {
        const res = await fetch('https://chat.autofaq.ai/api/login', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            credentials: "include",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                "Accept": " */*"
            },
        })
        const bla = await res.json()
        console.log(bla)
    } catch (e: any) {
        console.log(e)
    }

}

// function loadDocumentScenario(callback:any) {
//     $(".save-document").attr("disabled", true);
//     const cred = getDocumentCredentials();
//     $.ajax({
//         type: "GET",
//         url: `/api/v1/documents/${cred.documentId}/scripter/parser/scenario`,
//         contentType: "application/json",
//         headers: { "AUTOFAQ-User-Token": cred.userToken },
//         cache: false,
//         success: function (response) {
//             console.log("doc scenario response:", response)
//             callback(translateBlocksToCompositeNodes(response.Flow))
//             $(".save-document").attr("disabled", false);
//         },
//         error: function (xhr, textStatus) {
//             flashMessage(
//                 "danger",
//                 formatErrorRejectionMessage(xhr.responseJSON, cred.serviceId)
//             );
//         },
//     });
// }
//
// function saveScenario() {
//     function updateDocument(doc, callback) {
//         var cred = getDocumentCredentials();
//         $.ajax({
//             type: "PUT",
//             url: "/api/v1/documents/" + cred.documentId,
//             data: JSON.stringify(doc),
//             headers: { "AUTOFAQ-User-Token": cred.userToken },
//             success: function (data) {
//                 popupNotice("Сценарий сохранен");
//                 flashMessageClear();
//                 callback();
//             },
//             error: function (xhr, textStatus) {
//                 flashMessage(
//                     "danger",
//                     formatErrorRejectionMessage(xhr.responseJSON, cred.serviceId)
//                 );
//                 callback();
//             },
//             contentType: "application/json",
//             dataType: "json",
//         });
//     }
//
//     function generateScenario(callback) {
//         let flow = translateCompositeNodesToBlocks(DrawflowEditor.instance().flowRoot);
//
//         const metainfoBlock = serializeUIMetainfo(DrawflowEditor.instance().flowRoot);
//         flow.Blocks.push(metainfoBlock);
//
//         var cred = getDocumentCredentials();
//         $.ajax({
//             type: "POST",
//             url: "/api/v1/scripter/generator",
//             data: JSON.stringify({
//                 source: { Flow: { Blocks: flow.Blocks } },
//             }),
//             headers: { "AUTOFAQ-User-Token": cred.userToken },
//             success: function (data) {
//                 console.log("generated DSL:", data.code);
//                 updateDocument({ answer: data.code }, callback);
//             },
//             error: function (xhr, textStatus) {
//                 flashMessage(
//                     "danger",
//                     formatErrorRejectionMessage(xhr.responseJSON, cred.serviceId)
//                 );
//                 callback();
//             },
//             contentType: "application/json",
//             dataType: "json",
//         });
//     }
//
//
// }
