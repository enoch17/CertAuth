

App = {
    loading: false,
    contracts: {},
  
    load: async () => {
      await App.loadWeb3()
      await App.loadAccount()
      await App.loadContract()
      await App.render()
      // await App.call()
    },
    // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert("Please connect to Metamask.")
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */})
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */})
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
    },
  
    loadAccount: async () => {
      // Set the current blockchain account
      App.account = web3.eth.accounts[0]
    },
  
    loadContract: async () => {
      // Create a JavaScript version of the smart contract
      const cert = await $.getJSON('Cert.json')
      App.contracts.Cert = TruffleContract(cert)
      // await App.contracts.Cert.setProvider(new Web3.providers.HttpProvider("http://172.31.33.253:7545"))      
      App.contracts.Cert.setProvider(App.web3Provider)
      console.log('Contract gotten')
      // Hydrate the smart contract with values from the blockchain
      App.cert = await App.contracts.Cert.deployed()
    },
  
    render: async () => {
      // Prevent double render
      if (App.loading) {
        return
      }
  
      // Update app loading state
      App.setLoading(true)
  
      // Render Account
      $('#account').html(App.account)
  
  
      // Update loading state
      App.setLoading(false)
    },
    setLoading: (boolean) => {
        App.loading = boolean
        const loader = $('#loader')
        const content = $('#content')
        if (boolean) {
          loader.show()
          content.hide()
        } else {
          loader.hide()
          content.show()
        }
      },
    addCertificate: async(id,year,content) =>
      {
          //add certificates
          App.setLoading(true)
          await App.cert.addCert(id,year,content).then(function(e){return true})
          console.log('Certificate added')
          window.location.reload()
      },
    getCertificate: async(id,snum) =>{
        //get certificates
        App.setLoading(true)
        // snum = "enoch"
        var hold = null
        await App.cert.unis(id).then(function(res){
          hold = res
          var holder = hold[2].toString()     
          console.log('Certificate gotten')
          var split =holder.split(";");
          var len = split.length
          console.log(holder)  
          console.log(split)
          for(let i = 0;i<len;i++)
          {
           var split2 = split[i].split(",")
           console.log(split2)
           if(snum == split2[0])
           {
              return split2
           }
          }
          return "Certificate doesn't exist"
        }
        )
        // exports.getCert = async (req,res,next)=>{
        //   App.setLoading(true)
        //   var hold = null
        //   let id = req.body.id;
        //   await App.cert.unis(id).then(function(res){
        //     hold = res
        //     var holder = hold[2].toString()     
        //     console.log('Certificate gotten')
        //     return holder  
        //   }
        // }
    },
    call: async() =>{
        await App.getCertificate(2)
    }

  }
  
  $(() => {
    $(window).load(() => {
      App.load()
    })
  })