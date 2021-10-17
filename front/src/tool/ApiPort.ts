

class ApiPort {
    private serverUri: string;

    constructor(serverUri: string) {
     
        this.serverUri = serverUri;
    }

    async asyncPost(uri:string, requestJson:any){
      try{
          let option = {
              method: 'post',
              body:JSON.stringify(requestJson),
              headers: {
                  'Content-Type': 'application/json'
              }
          }

          if(requestJson){

             option.body =JSON.stringify(requestJson);
             console.log("body info")
          }

          
          const response = await fetch(uri, option).then(res=>{
              console.log(option)
             
              if(res.status ===200){
                  console.log('response success');
              }else{
                  console.log('response fail: ' + res.status);
              }
              return res;
          });

          const data = await response.json();

          return data;
      }
      catch(e){
          console.log(e);
          return null;
      }     
  }

    private async asyncGet(uri: string) {
        try {
            const option = {
                method: 'GET',
            };

            const response: Response = await fetch(uri, option);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            if (response.status === 200) {
                console.log('GET response success', response.body);
            } else {
                console.log('GET response fail' + response.status);
            }

            return response;
        }
        catch (e) {
            throw new Error("GET error" + e);
            
        }
    }

  /*   public async insertGameResult(gameResult:any) {
        return await this.asyncPost(this.serverUri, gameResult);
    }
 */
    public async getTeacherList() {
        return (await this.asyncGet( `${this.serverUri}/teacherList`)).json();
    }

   /*  private async insertGameData(gameData:any) {
        let uri = `${this.serverUri}/gameData`;

        return await this.asyncPost(uri, gameData);
    } */

    public async getReservation(data:any){
      let uri = `${this.serverUri}/confirmReservation`
      return await this.asyncPost(uri,data);
    }
}

const apiPort = new ApiPort("https://ski-reservation-server.du.r.appspot.com");

export { apiPort }