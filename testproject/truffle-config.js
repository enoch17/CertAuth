module.exports = {
  networks: {
    development: {
      // host: "127.0.0.1",
      host: "172.31.33.253",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}