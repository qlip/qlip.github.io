function send()
{
    
    
//�������� ���������
var name = $('#name').val();
var telephone = $('#telephone').val();
var email = $('#email').val();
var hall = $('#hall').val();
var event = $('#event').val();
var datefrom = $('#datefrom').val();
var dateto = $('#dateto').val();
var timefrom = $('#timefrom').val();
var timeto = $('#timeto').val();
var count = $('#count').val();
var comments = $('#comments').val();
  // �������� �������
       $.ajax({
                type: "POST",
                url: "form.php",
                data: "name="+name+"&telephone="+telephone+"&email="+email+"&hall="+hall+"&event="+event+"&datefrom="+datefrom+"&dateto="+dateto+"&timefrom="+timefrom+"&timeto="+timeto+"&count="+count+"&comments="+comments,
                // ������� �� ��� ������ PHP
                success: function(html) {
 //�������������� ������� ������ ������� ��������
                        $("#result").empty();
//� ������� ����� php �������
                        $("#result").append(html);
                }
        });

}