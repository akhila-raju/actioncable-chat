this.App = {};

App.cable = Cable.createConsumer("<%= Rails.application.config.web_socket_server_url %>");  