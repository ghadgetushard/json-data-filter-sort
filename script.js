$(function() {
    $('#txt-insurance-type, #txt-insurance-provider').on('keyup', function() {
        var searchFieldInsuranceType = $(this).val();
        var searchFieldInsuranceProvider = $(this).val();
        // var searchFieldAgencyRepairCover = $(this).val();

        if (searchFieldInsuranceType === '' || searchFieldInsuranceProvider === '') {
            $('#filter-records').html('');
            return;
        }

        var regexInsuranceType = new RegExp(searchFieldInsuranceType, "i");
        var regexInsuranceProvider = new RegExp(searchFieldInsuranceProvider, "i");

        var output = '<div class="mb-5 row text-center">';
        var count = 1;
        $.each(data, function(key, val) {
            // if ((val.employee_salary.search(regex) != -1) || (val.employee_name.search(regex) != -1)) {
            if ((val.insurance_type.search(regexInsuranceType) != -1) || (val["provider"]["en-ae"]["name"].search(regexInsuranceProvider) != -1)) {

                output += '<div class="col-lg-4 col-md-4 col-12">';
                output += '<div class="card">';
                output += '<div class="card-body">';
                // output += '<img class="img-responsive" src="' + val["provider"]["en-ae"]["image_url"] + '" alt="Test image"  />';
                output += '<h5 class="card-title">' + val["provider"]["en-ae"]["product_name"] + '</h5>';
                output += '<a href="#" class="btn btn-primary">' + val.premium + " " + val.currency + '</a>';
                output += '</div>';
                output += '</div>';
                output += '</div>';

                if (count % 3 == 0) {
                    output += '</div><div class="mb-5 row text-center">'
                }
                count++;
            }
        });
        output += '</div>';
        $('#filter-records').html(output);
    });

    var htmlText = '<div class="mb-5 row text-center">';

    for (var x in data) {

        htmlText += '<div class="col-lg-4 col-md-4 col-12">';
        htmlText += '<div class="card">';
        htmlText += '<div class="card-body">';
        htmlText += '<h5 class = "card-title">' + data[x]["provider"]["en-ae"]["product_name"] + '</h5>';
        htmlText += '<a href="#" class="btn btn-primary">' + data[x]["premium"] + " " + data[x]["currency"] + ' </a>';
        htmlText += '</div>';
        htmlText += '</div>';
        htmlText += '</div>';

        if (x != 0 && x % 2 == 0) {
            htmlText += '</div><div class="mb-5 row text-center">'
        }
    }

    htmlText += '</div>';
    $('#allplans').append(htmlText);

    $('#txt-sort-plans').on('change', function() {

        var sortParameter = $(this).val();
        if (sortParameter == 'highfirst') {
            data.sort(function(a, b) {
                return b.premium - a.premium;
            });
        } else {
            data.sort(function(a, b) {
                return a.premium - b.premium;
            });
        }

        $('#allplans').html('');


        var htmlText = '<div class="mb-5 row text-center">';
        for (var x in data) {

            htmlText += '<div class="col-lg-4 col-md-4 col-12">';
            htmlText += '<div class="card">';
            htmlText += '<div class="card-body">';
            htmlText += '<h5 class = "card-title">' + data[x]["provider"]["en-ae"]["product_name"] + '</h5>';
            htmlText += '<a href="#" class="btn btn-primary">' + data[x]["premium"] + " " + data[x]["currency"] + ' </a>';
            htmlText += '</div>';
            htmlText += '</div>';
            htmlText += '</div>';

            if (x != 0 && x % 2 == 0) {
                htmlText += '</div><div class="mb-5 row text-center">'
            }
        }

        htmlText += '</div>';
        $('#allplans').append(htmlText);

    });

})