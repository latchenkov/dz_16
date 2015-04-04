<?php
require_once ('config.php');
require_once ($project_root.'/lib/connection.php'); 
require ($project_root.'/lib/ads_class.php'); 

switch ($_GET['action']) {
    case 'delete':
        $id=(int)$_GET['id'];
        Ads::delAdFromDb($id);
        break;
    case 'save':
        if ($_POST['seller_name'] && $_POST['description']) { // если была нажата кнопка
        $post_ad = Ads::trimPOST($_POST);
            switch ($post_ad['type']) {
                case 'private' : // Частное объявление
                    $ad = new privateAd($post_ad);
                break;
                case 'corporate' : // Объявление компании
                    $ad = new corporateAd($post_ad);
                break;
            }
        $ad->saveAd();
        
        if (!$ad->getId()){
            $ad->setId();
        }
        $result['id']=$ad->getId();
        $result['row']=AdsStore::getInstance()->addAds($ad)->prepareForOutTableRowAjax();
        echo json_encode ($result);
        }
        break;
    case 'show':
        $edit_id=(int)$_GET['id'];
        $result=AdsStore::getInstance()->getSingleAdFromDb($edit_id)->prepareForOutSingleAd($edit_id);
        echo json_encode ($result);
        break;
    default:
        break;
}
