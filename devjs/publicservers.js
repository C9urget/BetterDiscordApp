/* BetterDiscordApp PublicSevers JavaSctript
 * Version: 1.0
 * Author: Jiiks | http://jiiks.net
 * Date: 27/08/2015 - 14:16
 * https://github.com/Jiiks/BetterDiscordApp
 */

var publicServers = {};

function PublicServers() {

}

PublicServers.prototype.init = function() {

    var container = $("<div/>", {
        id: "bd-ps-container"
    });

    var header = $("<div/>", {
        id: "bd-ps-header"
    });

    $("<h2/>", {
        text: "Public Servers"
    }).appendTo(header);

    $("<span/>", {
        id: "bd-ps-close",
        text: "X"
    }).appendTo(header);

    header.appendTo(container);

    var psbody = $("<div/>", {
        id: "bd-ps-body"
    });

    psbody.appendTo(container);

    var table = $("<table/>", {
        border:"0"
    });

    var thead = $("<thead/>");

    thead.appendTo(table);

    var headers = $("<tr/>", {

    }).append($("<th/>", {
        text: "Name"
    })).append($("<th/>", {
        text: "Code"
    })).append($("<th/>", {
        text: "Language"
    })).append($("<th/>", {
        text: "Description"
    }));

    headers.appendTo(thead);

    var tbody = $("<tbody/>", {
        id: "bd-ps-tbody"
    });

    tbody.appendTo(table);

    table.appendTo(psbody);

    $("body").append(container);


    var servers = publicServers.servers;

    for(var server in servers) {
        var name = server;
        server = servers[server];
        var code = server.code;
        var icon = server.icon;
        var title = server.title;
        var language = server.language;
        var description = server.description;

        this.addServer(name, code, title, language, description);
    }

}

PublicServers.prototype.addServer = function(name, code, title, language, description) {

    var tableBody = $("#bd-ps-tbody");


    var desc = $("<td/>").append($("<div/>", {
        class: "bd-ps-description",
        text: description
    }));

    var tr = $("<tr/>");

    tr.append($("<td/>", {
        text: title
    }));

    tr.append($("<td/>", {
        text: code
    }));

    tr.append($("<td/>", {
        text: language
    }));

    tr.append(desc);

    tableBody.append(tr);
}